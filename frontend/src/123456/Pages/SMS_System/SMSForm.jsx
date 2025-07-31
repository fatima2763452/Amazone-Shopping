import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from "../../Components/NavBar";
import Button from '@mui/material/Button';

function SMSForm() {
    const [info, setInfo] = React.useState({
        phoneNumber: "",  
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/sms/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            });

            const data = await response.json();
            if (data.success) {
                alert("SMS sent successfully!");
            } else {
                alert("Failed to send SMS: " + (data.error || "Unknown error"));
            }

        } catch (error) {
            console.error("Error sending SMS:", error);
            alert("An error occurred while sending the SMS.");
        }
    };

    return (
        <>
            <NavBar />
            <div className="Container mt-3">
                <form className="row" onSubmit={handleSubmit}>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="phoneNumber" className="form-label text-muted">Mobile Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"  // ✅ updated name
                            value={info.phoneNumber}
                            onChange={handleChange}
                            className="form-control text-muted"
                            placeholder="Enter mobile number"
                        />
                    </div>

                    <div className="col-md-6 mb-3 mt-2">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Enter your message"
                            multiline
                            maxRows={100}
                            value={info.message}
                            onChange={handleChange}
                            name="message"
                        />
                    </div>

                    <div className="w-100 text-center mt-4">
                        <Button
                            variant="contained"
                            type='submit'
                            sx={{
                                width: { xs: '90%', sm: '90%', md: '20%' },
                                mx: 'auto',
                            }}
                        >
                            Submit & Create
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SMSForm;
