import React, { useState , useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // optional: your custom styles

function SecretToken() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

    useEffect(() => {
    const expired = localStorage.getItem("sessionExpired");
    if (expired === "true") {
      
      localStorage.removeItem("sessionExpired"); 
    }
  }, []);

  const handleChange = e => setToken(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!token) {

      return;
    }
    // accept only these two
    if (token === "110099" || token === "220088" || token === "330077" || token === "440066" || token === "109020" || token === "208030" || token === "307040" ) {
      // persist token + timestamp
      localStorage.setItem("authToken", token);
      localStorage.setItem("loginTime", Date.now().toString());
      navigate("/form");
    } else {
        window.location.href = "https://www.amazon.in/Symbol-Premium-Tri-Blend-Trouser-SP-S24-M-CT-101_Dark/dp/B0CSNJPGHK/ref=sr_1_2_sspa?crid=2HRUHNII34DKN&dib=eyJ2IjoiMSJ9.K3MVhSJ3TiulnQ4iDWF9ucRygnrqOYSjFyxaTJ1ZG-ASUD-0tJs0jT8lsLB9wnJrFkJH0MnQpQJrqUyNfiUogxR72zXejYIvFpo0badiVDa1KfRuqqGprO7vo_7kO4JCa7ECGx0gaVGunC0XtpQ9ZDDVwCmMuGsPxShiCNEK8tMJL6I1HBBwp18egjYcA9w5gSAyxCn42Gd1-bmImZVWl8EyqzpMJu_jDefaE9h0qjBi7utOuCz7Xyjl8_69xc3Rx2r-PSlKBj9cRTn1oQ6Q_KB0a8LoWjEyujsESGBwWQo.XS3P6lwbDRtG1hJaXj_5uktffA4UqMAgoXEHGf69-Rs&dib_tag=se&keywords=men%2Bpants&qid=1752401768&sprefix=men%2Bpent%2Caps%2C447&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1";
    }
  };

  return (
    <div className="container py-4">
      <p><strong>NOTE:</strong> Do not share your token with anyone</p>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="token" className="form-label text-muted">Token</label>
          <input
            id="token"
            name="token"
            type="password"
            value={token}
            onChange={handleChange}
            className="form-control text-muted"
            placeholder="Enter your Secret token"
          />
        </div>
        <div className="w-100 text-center mt-4">
          <Button
            variant="contained"
            type="submit"
            sx={{ width: { xs: '90%', sm: '90%', md: '20%' }, mx: 'auto' }}
          >
            Submit &amp; Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SecretToken;
