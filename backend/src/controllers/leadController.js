const Lead = require('../models/Lead');

// @route   GET /api/leads
const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @route   POST /api/leads
const createLead = async (req, res) => {
    try {
        const { name, email, status } = req.body;
        const existingLead = await Lead.findOne({ email });
        if (existingLead) {
            return res.status(400).json({
                success: false,
                message: 'Lead with this email already exists'
            });
        }

        const lead = await Lead.create({
            name,
            email,
            status: status || 'New'
        });

        res.status(201).json({
            success: true,
            data: lead
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

module.exports = {
    getLeads,
    createLead
};