
import { Request, Response, NextFunction } from "express";
import * as Models from "../models/index"

export const checkApproval = async (req: any, res: Response, next: NextFunction) => {
    try {
        console.log()
        const userId = req.user_data._id; // comes from your auth middleware
        console.log(userId)

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized. User ID missing." });
        }

        const user = await Models.User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(user.approved)

        if (!user.approved) {
            return res.status(403).json({ message: "Access denied. Your account is not approved by admin." });
        }

        next();
    } catch (error: any) {
        return res.status(500).json({ message: error.message || "Server error" });
    }
};
