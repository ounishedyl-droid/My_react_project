const courseTitle = "React Fundamentals";

function App() {
  const studentName = "Hedyl";

  const student = {
    name: "Hedyl",
    age: 20,
    track: "Web Development"
  };

  function sayHello() {
    return `Hello ${studentName}, welcome to React!`;
  }

  return (
    <div>
      <h1>My First React Component </h1>

      <p>Student name: {studentName}</p>

      <p>Course: {courseTitle}</p>

      <h2>Welcome to {courseTitle}, {studentName}!</h2>

      <label htmlFor="studentInput">Enter your name:</label>
      <input type="text" id="studentInput" />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      {/* ✅ STEP 7 */}
      <p>{sayHello()}</p>
    </div>
  );
}

export default App;