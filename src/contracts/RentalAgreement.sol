pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract RentalAgreement{
    
    address payable admin;
    address payable tenant;
    address payable landlord;
    uint public no_of_rooms = 0;
    uint public no_of_agreement = 0;
    uint public no_of_rent = 0;
    
    constructor() public{
        admin = 0x56906F27e29B3095fE67f1920aEf58740C767591;
    }
    
    struct Room{
        uint roomid;
        uint agreementid;
        string housename;
        string houseaddress;
        string hostelorpg;
        uint rent_per_month;
        uint securityDeposit;
        uint timestamp;
        bool vacant;
        address payable landlord;
        address payable currentTenant;
    }
    mapping(uint => Room) public Room_by_No;
    
    struct RoomAgreement{
        uint roomid;
        uint agreementid;
        string Roomname;
        string RoomAddresss;
        uint rent_per_month;
        uint securityDeposit;
        uint lockInPeriod;
        uint timestamp;
        address payable tenantAddress;
        address payable landlordAddress;
    }
   mapping(uint => RoomAgreement) public RoomAgreement_by_No;
    
    struct Rent{
        uint rentno;
        uint roomid;
        uint agreementid;
        string Roomname;
        string RoomAddresss;
        uint rent_per_month;
        uint timestamp;
        address payable tenantAddress;
        address payable landlordAddress;
    }
   mapping(uint => Rent) public Rent_by_No;
    
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only Admin can access this");
        _;
    }
    
    modifier onlyLandlord(uint _index) {
        require(msg.sender == Room_by_No[_index].landlord, "Only landlord can access this");
        _;
    }
    
    modifier notLandLord(uint _index) {
        require(msg.sender != Room_by_No[_index].landlord, "Only Tenant can access this");
        _;
    }
    
    modifier OnlyWhileVacant(uint _index){
        
        require(Room_by_No[_index].vacant == true, "Room is currently Occupied.");
        _;
    }
    
    modifier enoughRent(uint _index) {
        require(msg.value >= uint(Room_by_No[_index].rent_per_month), "Not enough Ether in your wallet");
        _;
    }
    
    modifier enoughAgreementfee(uint _index) {
        require(msg.value >= uint(uint(Room_by_No[_index].rent_per_month) + uint(Room_by_No[_index].securityDeposit)), "Not enough Ether in your wallet");
        _;
    }
    
    modifier sameTenant(uint _index) {
        require(msg.sender == Room_by_No[_index].currentTenant, "No previous agreement found with you & landlord");
        _;
    }
    
    modifier AgreementTimesLeft(uint _index) {
        uint _AgreementNo = Room_by_No[_index].agreementid;
        uint time = RoomAgreement_by_No[_AgreementNo].timestamp + RoomAgreement_by_No[_AgreementNo].lockInPeriod;
        require(now < time, "Agreement already Ended");
        _;
    }
    
    modifier AgreementTimesUp(uint _index) {
        uint _AgreementNo = Room_by_No[_index].agreementid;
        uint time = RoomAgreement_by_No[_AgreementNo].timestamp + RoomAgreement_by_No[_AgreementNo].lockInPeriod;
        require(now > time, "Times left for contract to end");
        _;
    }
    
    modifier RentTimesUp(uint _index) {
        uint time = Room_by_No[_index].timestamp + 30 days;
        require(now == time, "Time left to pay Rent");
        _;
    }
    
    function addRoom(string memory _housename, string memory _houseaddress, string memory _housetype, uint _rentcost, uint  _securitydeposit) public {
        no_of_rooms ++;
        bool _vacancy = true;
        Room_by_No[no_of_rooms] = Room(no_of_rooms,0,_housename,_houseaddress, _housetype, _rentcost,_securitydeposit,0,_vacancy, msg.sender, address(0)); 
    }
    
   
    function signAgreement(uint _index) public payable notLandLord(_index) enoughAgreementfee(_index) OnlyWhileVacant(_index){
        address payable _landlord = Room_by_No[_index].landlord;
        uint totalfee = Room_by_No[_index].rent_per_month + Room_by_No[_index].securityDeposit;
        
        _landlord.transfer(totalfee);
        no_of_agreement++;

        Room_by_No[_index].currentTenant = msg.sender;
        Room_by_No[_index].vacant = false;
        Room_by_No[_index].timestamp = block.timestamp;
        Room_by_No[_index].agreementid = no_of_agreement;
        RoomAgreement_by_No[no_of_agreement]=RoomAgreement(_index,no_of_agreement,Room_by_No[_index].housename,Room_by_No[_index].houseaddress,Room_by_No[_index].rent_per_month,Room_by_No[_index].securityDeposit,365 days,block.timestamp,msg.sender,_landlord);
        
    }
    
    function payRent(uint _index) public payable sameTenant(_index) RentTimesUp(_index) enoughRent(_index){
        address payable _landlord = Room_by_No[_index].landlord;
        uint _rent = Room_by_No[_index].rent_per_month;
        
        _landlord.transfer(_rent);
        
        Room_by_No[_index].currentTenant = msg.sender;
        Room_by_No[_index].vacant = false;
        no_of_rent++;
        Rent_by_No[no_of_rent]=Rent(no_of_rent,_index,Room_by_No[_index].agreementid,Room_by_No[_index].housename,Room_by_No[_index].houseaddress,_rent,now,msg.sender,Room_by_No[_index].landlord);
        
    }
    function agreementCompleted(uint _index) public payable onlyLandlord(_index) AgreementTimesUp(_index){
        Room_by_No[_index].vacant = true;
        
        address payable _Tenant = Room_by_No[_index].currentTenant;
        uint _securitydeposit = Room_by_No[_index].securityDeposit;
        _Tenant.transfer(_securitydeposit);
    }
    
    function agreementTerminated(uint _index) public onlyLandlord(_index) AgreementTimesLeft(_index){
        Room_by_No[_index].vacant = true;
    }
    
    function totalfee(uint _index) public returns (uint){
        uint rent = Room_by_No[_index].rent_per_month;
        uint securityDeposit = Room_by_No[_index].securityDeposit;
        uint total =  rent + securityDeposit;
        return(total);
    }
    
    function rent(uint _index) public returns (uint){
        uint rent = Room_by_No[_index].rent_per_month;
         return(rent);
    }

    function securitydeposit(uint _index) public returns (uint){
        uint rent = Room_by_No[_index].securityDeposit;
         return(rent);
    }

    function landlordAddress(uint _index) public returns (address){
        address landlordAddress = Room_by_No[_index].landlord;
         return(landlordAddress);
    }
}
    