pragma solidity ^0.5.16;

contract Library {
    
  address public admin;
  address public librarian;
  
  uint256 public BookCount = 0;
  uint256 public NoteCount = 0;
  
  constructor() public {
      admin = 0x56906F27e29B3095fE67f1920aEf58740C767591;
      librarian = 0x56906F27e29B3095fE67f1920aEf58740C767591;
  }
  
  struct Book {
    uint256 book_Id;
    string book_Hash;
    uint256 book_Size;
    string book_Name;
    string book_Description;
    string author;
    uint256 isbn;
    uint256 uploadTime;
    address uploader;
  }
  mapping(uint256 => Book) public books;

  struct Note {
    uint256 note_Id;
    string note_Hash;
    uint256 note_Size;
    string stream;
    string subjectcode;
    string teacher;
    string date;
    uint256 uploadTime;
    address uploader;
  }
    
  mapping(uint256 => Note) public notes;
    
  event BookUploaded(uint256 book_Id,string book_Hash,uint256 book_Size,string book_Name,string book_Description,string author,uint256 isbn,uint256 uploadTime,address uploader);
  event NoteUploaded(uint256 note_Id,string note_Hash,uint256 note_Size,string stream,string subjectcode,string teacher,string date,uint256 uploadTime,address uploader);
    
  

  modifier onlyadmin(){
        require(msg.sender==admin,"Only Admin can access this");
        _;
    }
    
  modifier onlylibrarian(){
        require(msg.sender==librarian,"Only librarian can access this");
        _;
    }
    
  modifier onlyUploader(uint256 _index){
        require(msg.sender==notes[_index].uploader,"Only Note Uploader can access this");
        _;
    }
    
  function changelibrarian(address _librarian) public onlyadmin() {
        librarian = _librarian;
    }
    
    
  function deletebook(uint index) public onlylibrarian(){
        if(index != BookCount){
        books[index]= Book(index,books[BookCount].book_Hash,books[BookCount].book_Size,books[BookCount].book_Name,books[BookCount].book_Description,books[BookCount].author,books[BookCount].isbn,books[BookCount].uploadTime,books[BookCount].uploader);
        books[BookCount]= Book(0,"",0,"","","",0,0,address(0));
        BookCount --;}
        else
        {
            books[index]= Book(0,"",0,"","","",0,0,address(0));
            BookCount--;
        }
    }
    
  function uploadBook(string memory _book_Hash,uint256 _book_Size,string memory _book_Name,string memory _book_Description,string memory _author,uint256 _isbn) public onlylibrarian() {
    
    require(bytes(_book_Hash).length > 0);
    require(bytes(_book_Name).length > 0);
    require(bytes(_book_Description).length > 0);
    require(bytes(_author).length > 0);
    require(_isbn > 0);
    require(msg.sender != address(0));
    require(_book_Size > 0);

    BookCount++;

    books[BookCount] = Book(BookCount,_book_Hash,_book_Size,_book_Name,_book_Description,_author,_isbn,now,msg.sender);

    emit BookUploaded(BookCount,_book_Hash,_book_Size,_book_Name,_book_Description,_author,_isbn,now,msg.sender);
  }
  
  function uploadNote(string memory _note_Hash,uint256 _note_Size,string memory _stream,string memory _subjectcode,string memory _teacher,string memory _date) public {
    
    require(bytes(_note_Hash).length > 0);
    require(bytes(_subjectcode).length > 0);
    require(bytes(_teacher).length > 0);
    require(bytes(_date).length > 0);
    require(_note_Size > 0);
    require(msg.sender != address(0));
    

    NoteCount++;

    notes[NoteCount] = Note(NoteCount,_note_Hash,_note_Size,_stream,_subjectcode,_teacher,_date,now,msg.sender);
    emit NoteUploaded(NoteCount,_note_Hash,_note_Size,_stream,_subjectcode,_teacher,_date,now,msg.sender);
    }
    
  function deletenote(uint index) public onlyUploader(index){
        if(index != NoteCount){
        notes[index]= Note(index,notes[NoteCount].note_Hash,notes[NoteCount].note_Size,notes[NoteCount].stream,notes[NoteCount].subjectcode,notes[NoteCount].teacher,notes[NoteCount].date,notes[NoteCount].uploadTime,notes[NoteCount].uploader);
        notes[BookCount]= Note(0,"",0,"","","","",0,address(0));
        NoteCount --;}
        else
        {
            notes[index]= Note(0,"",0,"","","","",0,address(0));
            NoteCount--;
        }
    }
}
