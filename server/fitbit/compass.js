function getCompass() {
	var dir = ['North','East','West','South','NorthEast','NorthWest','SouthEast','SouthWest'];
    return dir[Math.floor(Math.random() * dir.length)];
}