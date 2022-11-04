import { useState } from "react";
import axios from "axios";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState(false);

  function handleEmail(e) {
    e.preventDefault();
    setButton(true);
    axios
      .post("http://localhost:8083/API/send-email", {
        name: name,
        from: email,
        text: message,
      })
      .then((response) => {
        console.log(response);
        setButton(false);
      });
  }

  return (
    <section id="contacts">
      <div className="container mb-5">
        <h2 className="pt-3 pb-3">Contatos</h2>
        <div className="row">
          <div className="col-md-5" data-anime="up">
            <div className="card p-5 shadow border-0">
              <div className="address">
                <h4>
                  <i className="bi bi-geo-alt"></i>
                </h4>
                <p>Jacareí, SP</p>
              </div>
              <div className="email">
                <h4>
                  <i className="bi bi-envelope"></i>
                </h4>
                <p>matheusrodrigomm@gmail.com</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7091736069615!2d-45.96435838454056!3d-23.290014857513754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb474a961f11%3A0x495346b1d65d729b!2sR.%20Am%C3%A9lia%20Faria%20-%20Parque%20Brasil%2C%20Jacare%C3%AD%20-%20SP%2C%2012328-120!5e0!3m2!1spt-BR!2sbr!4v1665334768059!5m2!1spt-BR!2sbr"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100"
              ></iframe>
            </div>
          </div>
          <div className="col-md-7" data-anime="down">
            <div className="card p-5 h-100 shadow border-0">
              <form
                className="row g-3"
                action="/send"
                method="POST"
                onSubmit={handleEmail}
              >
                <div className="col-md-6">
                  <label htmlFor="nome" className="form-label">
                    Nome:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="mensagem" className="form-label">
                    Mensagem:
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="mensagem"
                    name="mensagem"
                    rows="10"
                    placeholder="Digite sua mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="col-12 d-flex justify-content-center mt-4">
                  {button ? (
                    <>
                      <button
                        id="btn-enviar-loader"
                        className="btn btn-primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Enviando...
                      </button>
                    </>
                  ):(
                    <>
                      <button
                        id="btn-enviar"
                        type="submit"
                        className="btn btn-primary"
                      >
                        Enviar mensagem
                      </button>
                    </>)
                   }

                  {/*
                   */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
