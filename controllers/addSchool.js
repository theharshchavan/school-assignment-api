import dbConnection from "../config/db.config.js";

const addSchoolValidation = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validation
  if (!name || !address || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (typeof name !== "string" || typeof address !== "string") {
    return res
      .status(400)
      .json({ message: "Name and address must be strings." });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res
      .status(400)
      .json({ message: "Latitude and longitude must be valid numbers." });
  }

  try {
    const sql =
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    const [result] = await dbConnection.query(sql, [
      name,
      address,
      latitude,
      longitude,
    ]);

    return res.status(201).json({
      message: "School added successfully",
      schoolId: result.insertId,
    });
  } catch (error) {
    console.error("Error inserting school:", error);
    return res.status(500).json({ message: "Database error" });
  }
};

export default addSchoolValidation;
