import React from "react";
import { useState, useEffect } from "react";
import "../About/makerdisp.css";

function Makers() {
  const [data0, setdata0] = useState(null);
  const [data1, setdata1] = useState(null);
  const [data2, setdata2] = useState(null);
  const [data3, setdata3] = useState(null);
  const [data4, setdata4] = useState(null);

  useEffect(() => {
    getDevelopers();

    async function getDevelopers() {
      const sohamBanerjee = await fetch(
        "https://api.github.com/users/soham4abc"
      );
      const shouryaShikhar = await fetch(
        "https://api.github.com/users/danger-ahead"
      );
      const aritraBelel = await fetch(
        "https://api.github.com/users/belelaritra"
      );
      const sohamSarkar = await fetch(
        "https://api.github.com/users/smart-worker"
      );
      const sohamSahaRoy = await fetch(
        "https://api.github.com/users/infuman69"
      );

      var data0 = await sohamBanerjee.json();
      var data1 = await shouryaShikhar.json();
      var data2 = await aritraBelel.json();
      var data3 = await sohamSarkar.json();
      var data4 = await sohamSahaRoy.json();

      setdata0(data0);
      setdata1(data1);
      setdata2(data2);
      setdata3(data3);
      setdata4(data4);
    }
  }, []);

  return (
    <div className="container">
      <h2 className="teamhead">The developers of DCampus</h2>
      <section className="teammem">
        <div className="teammemcont">
          {data1 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data1.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data1.avatar_url}

                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data1.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data1.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/shourya-shikhar"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data0 && (
            <div className="teamflex ">
              <div className="teammemcard">
                <img
                  src={data0.avatar_url}
                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data0.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data0.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soham-banerjee-6091831b3/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data0.bio}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data2 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data2.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data2.avatar_url}
                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data2.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data2.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/belelaritra/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data3 && (
            <div className="teamflex ">
              <div className="teammemcard">
                <img
                  src={data3.avatar_url}
                  
                />
                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data3.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data3.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soham-sarkar-8a9401203/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data3.bio}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div style={{ marginBottom: "5%" }} className="teammemcont">
          {data4 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data4.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data4.avatar_url}
                 
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data4.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data4.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soham-saharoy-788115206/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Makers;
