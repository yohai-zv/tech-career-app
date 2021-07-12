export const getStudents = async () => {
  const response = await fetch('./mocks/students.json');
  const studentsResult = response.json();
  return studentsResult;
}