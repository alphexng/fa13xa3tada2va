import db from "../db";

const removeUsers = `
DROP TABLE IF EXISTS users CASCADE
`;

const removeAdmin = `
DROP TABLE IF EXISTS admin CASCADE
`;

const removeMessaging = `
DROP TABLE IF EXISTS messaging CASCADE
`;

const removeContactus = `
DROP TABLE IF EXISTS contactus CASCADE
`;

const removeVehicles = `
DROP TABLE IF EXISTS vehicles CASCADE
`;

db.query(
    removeUsers,
    (err,res) => {
        if (err) {
            console.log('Users Table Not Dropped');
        }else{
            console.log('Users Table Dropped');
        };
    }
);

db.query(
    removeAdmin,
    (err,res) => {
        if (err) {
            console.log('Admin Table Not Dropped');
        }else{
            console.log('Admin Table Dropped');
        };
    }
);

db.query(
    removeMessaging,
    (err,res) => {
        if (err) {
            console.log('Messaging Table Not Dropped');
        }else{
            console.log('Messaging Table Dropped');
        };
    }
);

db.query(
    removeContactus,
    (err,res) => {
        if (err) {
            console.log('Contactus Table Not Dropped');
        }else{
            console.log('Contactus Table Dropped');
        };
    }
);

db.query(
    removeVehicles,
    (err,res) => {
        if (err) {
            console.log('Vehicles Table Not Dropped');
        }else{
            console.log('Vehicles Table Dropped');
        };
    }
);