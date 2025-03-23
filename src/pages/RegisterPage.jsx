import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import logoImage from '../assets/logo.png';

const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!fullName || !email || !password || !phoneNumber) {
            setError('Semua field harus diisi');
            return;
        }

        setError('');
        setLoading(true);

        try {
            // API untuk register
            console.log('Register dengan:', { fullName, email, password, phoneNumber });

            // delay demo
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect ke login 
            alert('Registrasi berhasil! Silakan login.');

        } catch (error) {
            setError('Registrasi gagal. Silakan coba lagi.');
            console.error('Register error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container fluid className="login-container p-0">
            <Row className="h-100 m-0">
                {/* Left side - Register Form */}
                <Col md={6} className="login-form-container d-flex align-items-center justify-content-center">
                    <Card className="login-card border-0 shadow">
                        <Card.Body className="p-4 p-md-5">
                            <div className="text-center mb-4">
                                <img src={logoImage} alt="E-Wallet Logo" className="logo mb-4" />
                            </div>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formFullName">

                                    <Form.Control
                                        type="text"
                                        placeholder="Nama Lengkap"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">

                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">

                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formPhoneNumber">

                                    <Form.Control
                                        type="tel"
                                        placeholder="No Hp"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 mb-4"
                                    disabled={loading}
                                >
                                    {loading ? 'Memproses...' : 'Daftar'}
                                </Button>

                                <p className="text-center mb-0">
                                    Sudah punya akun? <Link to="/login" className="text-decoration-none">Login di sini</Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Right side - Background Image */}
                <Col md={6} className="login-image-container p-0 d-none d-md-block">
                    <div className="login-image-overlay">
                        <div className="login-image-text">

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;