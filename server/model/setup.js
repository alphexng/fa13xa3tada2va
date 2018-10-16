import db from "../db";

const createUsers = `
CREATE TABLE users (
    id serial PRIMARY KEY NOT NULL,
    refid VARCHAR(11) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone NUMERIC(15) NOT NULL,
    dob DATE,
    password VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    verify_status BOOLEAN,
    date_created TIMESTAMP DEFAULT Now()
)
`;

const createAdmin = `
CREATE TABLE admin (
    id serial PRIMARY KEY NOT NULL,
    refid VARCHAR(11) UNIQUE,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone NUMERIC(15) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL,
    date_created TIMESTAMP DEFAULT Now()
)
`;

const createMessaging = `
CREATE TABLE messaging (
    id serial PRIMARY KEY NOT NULL,
    refid VARCHAR(11) UNIQUE NOT NULL,
    sender VARCHAR(15) NOT NULL,
    recipient VARCHAR(15) NOT NULL,
    message TEXT NOT NULL,
    sender_read BOOLEAN,
    recipient_read BOOLEAN,
    message_type VARCHAR(20) NOT NULL,
    date_created TIMESTAMP DEFAULT Now()
)
`;

const createContactus = `
CREATE TABLE contactus (
    id serial PRIMARY KEY NOT NULL,
    refid VARCHAR(11) UNIQUE NOT NULL,
    sender VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    city VARCHAR(30) NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN,
    date_created TIMESTAMP DEFAULT Now()
)
`;

const createVehicles = `
CREATE TABLE vehicles (
    id serial PRIMARY KEY NOT NULL,
    refid VARCHAR(20) UNIQUE NOT NULL,
    date_created TIMESTAMP DEFAULT Now()
)
`;

db.query(
    createUsers,
    (err,res) => {
        if (err) {
            console.log('Users Table Not Added');
        }else{
            console.log('Users Table Added');
        };
    }
);

db.query(
    createAdmin,
    (err,res) => {
        if (err) {
            console.log('Admin Table Not Added');
        }else{
            console.log('Admin Table Added');
        };
    }
);

db.query(
    createMessaging,
    (err,res) => {
        if (err) {
            console.log('Messaging Table Not Added');
        }else{
            console.log('Messaging Table Added');
        };
    }
);

db.query(
    createContactus,
    (err,res) => {
        if (err) {
            console.log('Contactus Table Not Added');
        }else{
            console.log('Contactus Table Added');
        };
    }
);

db.query(
    createVehicles,
    (err,res) => {
        if (err) {
            console.log('Vehicles Table Not Added');
        }else{
            console.log('Vehicles Table Added');
        };
    }
);