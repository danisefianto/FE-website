// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import logoImage from '../assets/logo.png'; // Pastikan Anda memiliki logo di folder assets

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Email dan password diperlukan');
            return;
        }

        setError('');
        setLoading(true);

        try {
            // Di sini nanti akan ada panggilan API untuk login
            console.log('Login dengan:', { email, password });

            // Simulasi delay untuk demo
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect ke dashboard (nanti akan diganti dengan react-router)
            alert('Login berhasil!');

        } catch (error) {
            setError('Login gagal. Periksa email dan password Anda.');
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container fluid className="login-container p-0">
            <Row className="h-100 m-0">
                {/* Left side - Login Form */}
                <Col md={6} className="login-form-container d-flex align-items-center justify-content-center">
                    <Card className="login-card border-0 shadow">
                        <Card.Body className="p-4 p-md-5">
                            <div className="text-center mb-4">
                                <img src={logoImage} alt="E-Wallet Logo" className="logo mb-4" />


                            </div>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formEmail">

                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formPassword">

                                    <Form.Control
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>


                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 mb-4"
                                    disabled={loading}
                                >
                                    {loading ? 'Memproses...' : 'Login'}
                                </Button>

                                <p className="text-left mb-0">
                                    Belum punya akun? <Link to="/register" className="text-decoration-none">Daftar di sini</Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Right side - Background Image */}
                <Col md={6} className="login-image-container p-0 d-none d-md-block">
                    <div className="login-image-overlay">
                        <div className="login-image-text">
                            <h2 className="fw-bold text-white mb-3">Selamat Datang di E-Wallet</h2>
                            <p className="text-white mb-0">Kelola keuangan Anda dengan mudah dan aman</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;