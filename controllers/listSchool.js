import dbConnection from "../config/db.config.js";

const listAllSchools = async (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  //Sorted by distance

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ message: "Invalid latitude or longitude" });
  }

  try {
    const [results] = await dbConnection.query("SELECT * FROM schools");

    const schoolsWithDistance = results.map((school) => {
      const distance = calculateDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );
      return { ...school, distance };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Database error" });
  }
};

// Haversine Formula function
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default listAllSchools;
