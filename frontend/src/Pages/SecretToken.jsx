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
    if (token === "504030" || token === "787832") {
      // persist token + timestamp
      localStorage.setItem("authToken", token);
      localStorage.setItem("loginTime", Date.now().toString());
      navigate("/form");
    } else {
     
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
            type="text"
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
