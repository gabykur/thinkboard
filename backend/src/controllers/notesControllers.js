export function getAllNotes(req, res) {
  res.status(200).send("you got 50923 notes");
}

export function createNote(req, res) {
  res.status(201).json({ message: "post created succesfully" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "post updated succesfully" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "post deleted succesfully" });
}