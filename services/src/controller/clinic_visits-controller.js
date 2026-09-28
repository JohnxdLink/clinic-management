const createClinicVisitService = require(".. services/accounts-services.js");
const { createClinicVisit, findClinicVisitsByRecordedBy } = require("../services/clinic_visits-service");

const createClinicVisitAccount = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        const result = await createClinicVisitService.createClinicVisitService( username, password ); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: "Create Clinic Visit created successfully.",
            data: result,
            });
        } catch (error) {
        console.error("Create CLinic Visit account error:", error);

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: error.message || ReasonPhrases.BAD_REQUEST,
            });
        } 
    }; 

const { findAllClinicVisit } = require("../services/clinic_visits-service");

const findAllClinicVisitsAccount = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        const result = await findAllClinicVisitService.findAllClinicVisitService( username, password ); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: "Find All Clinic Visit created successfully.",
            data: result,
            });
        } catch (error) {
        console.error("Find All CLinic Visit account error:", error);

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: error.message || ReasonPhrases.BAD_REQUEST,
            });
        } 
    }; 

const { findClinicVisitById } = require("../services/clinic_visits-service");

const findClinicVisitsById = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        const result = await findClinicVisitByIdService.findClinicVisitByIDService( username, password ); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: "Find  Clinic Visit By Id created successfully.",
            data: result,
            });
        } catch (error) {
        console.error("Find  CLinic Visit By Id account error:", error);

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: error.message || ReasonPhrases.BAD_REQUEST,
            });
        } 
    }; 


const { findClinicVisitById } = require("../services/clinic_visits-service");

const findClinicVisitsByHealthRecordId = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        const result = await findClinicVisitsByHealthRecordIdService.findClinicVisitsByHealthRecordIdService( username, password ); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: "Find  Clinic Visit By Health Record Id created successfully.",
            data: result,
            });
        } catch (error) {
        console.error("Find  CLinic Visit By Health Record Id account error:", error);

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: error.message || ReasonPhrases.BAD_REQUEST,
            });
        } 
    }; 

const { findClinicVisitsByRecordedBy } = require("../services/clinic_visits-service");

const findClinicVisitsByRecordedBy = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        const result = await findClinicVisitsByRecordedByService.findClinicVisitsByRecordedByService( username, password ); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: "Find  Clinic Visit By Recorded By created successfully.",
            data: result,
            });
        } catch (error) {
        console.error("Find  CLinic Visit By Recorded By account error:", error);

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: error.message || ReasonPhrases.BAD_REQUEST,
            });
        } 
    }; 

const { updateClinicVisit } = require("../services/clinic_visits-service");

const updateClinicVisit = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        const result = await updateClinicVisit.updateClinicVisit( username, password ); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: "Update Clinic Visit created successfully.",
            data: result,
            });
        } catch (error) {
        console.error("Update Clinic Visit account error:", error);

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: error.message || ReasonPhrases.BAD_REQUEST,
            });
        } 
    }; 

const { deleteClinicVisit } = require("../services/clinic_visits-service");

const deleteClinicVisit = async (req, res) => {
    try { 
        const { username, password } = req.body;
        
        const result = await deleteClinicVisit.deleteClinicVisit( username, password ); 
        
        return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: "Delete Clinic Visit created successfully.",
            data: result,
            });
        } catch (error) {
        console.error("Delete Clinic Visit account error:", error);

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: error.message || ReasonPhrases.BAD_REQUEST,
            });
        } 
    }; 


    module.exports = {
        createClinicVisit,
        findAllClinicVisits,
        findClinicVisitById,
        findClinicVisitsByHealthRecordId,
        findClinicVisitsByRecordedBy,
        updateClinicVisit,
        deleteClinicVisit,
    }
