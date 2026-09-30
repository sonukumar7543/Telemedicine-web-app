import validator from "validator";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentMoedel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";



// API for adding doctor
const addDoctor = async (req,res) =>{

    try {
        const {name, email, password, speciality, degree, experience, about, available, fees, address, date} = req.body;
        const imageFile = req.file;

        // Check for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success: false, message: "Missing details to add doctor"});
        }
        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Invalid email format"});
        }

        // check strong password
        if(password.length < 8){
            return res.json({success: false, message: "Password must be at least 8 characters long"});
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // upload image to cloudinary
        let imageUrl = '';

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
                resource_type: "image",
            });

            imageUrl = imageUpload.secure_url;
        }

        // create doctor object
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address), // Assuming address is sent as a JSON string
            available,
            date:Date.now(),
        };

        // Here you would typically save the doctorData to your database
        // For example: const newDoctor = new Doctor(doctorData); await newDoctor.save();

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        return res.json({success: true, message: "Doctor added successfully"});

    }catch (error) {
        console.error("Error adding doctor:", error);
        return res.json({success: false, message: "Error adding doctor"});
    }

}

// API for admin login
const loginAdmin = async (req,res) => {
    try {
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success: true, message: "Admin login successful", token});

        } else {
            res.json({success: false, message: "Invalid admin credentials"});
        }

    } catch (error) {
        console.error("Error during admin login:", error);
        res.json({success: false, message: error.message});
    }
};

// api to get all doctors list

const allDoctors = async(req,res) =>{
    try{
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})

    }catch(error){
        console.log(error)
        req.json({success:false,message:error.message})
    }
}

// API to get all appointment list
const appointmentsAdmin = async (req,res)=>{
    try {

        const appointments = await appointmentMoedel.find({})
        res.json({success:true,appointments})
        
    } catch (error) {
        console.log(error)
        req.json({success:false,message:error.message})
    }
}

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
    try {

        const { appointmentId } = req.body
        const appointmentData = await appointmentMoedel.findById(appointmentId)

        await appointmentMoedel.findByIdAndUpdate(appointmentId, { cancelled: true })

        // realsing doctor slot

        const { docId, slotDate, slotTime } = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await doctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: 'Appointment Cancled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Api to get deshbord data for admin panel
const adminDashboard = async (req,res) => {
    try {

        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentMoedel.find({})

        const dashData = {
            doctors:doctors.length,
            appointments:appointments.length,
            patients:users.length,
            latestAppointment:appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashData})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {addDoctor, loginAdmin,allDoctors,appointmentsAdmin,appointmentCancel,adminDashboard};