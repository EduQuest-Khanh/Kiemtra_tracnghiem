import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// Since all component files were merged into index.tsx, their definitions are included here.

// --- START: components/Icons.tsx ---
const Icons = {
  book: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 16.5v-11A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 1 4 14.5v-11z"/></svg>
  ),
  user: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
};
// --- END: components/Icons.tsx ---

// --- START: components/Header.tsx ---
const Header = () => (
  <header style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fa' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Icons.book />
      <h1>Lesson Planner AI</h1>
    </div>
  </header>
);
// --- END: components/Header.tsx ---

// --- START: components/Footer.tsx ---
const Footer = () => (
  <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center', marginTop: 'auto', background: '#f8f9fa' }}>
    <p>&copy; {new Date().getFullYear()} Lesson Planner AI. All rights reserved.</p>
  </footer>
);
// --- END: components/Footer.tsx ---

// --- START: components/TeacherDashboard.tsx ---
const TeacherDashboard = () => {
  const [topic, setTopic] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const generateLessonPlan = async () => {
    if (!topic || !gradeLevel) {
      alert('Please enter a topic and select a grade level.');
      return;
    }
    setLoading(true);
    setLessonPlan('');
    try {
      // Fix: Initialize GoogleGenAI with the required apiKey object.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Fix: Use ai.models.generateContent for text generation.
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a detailed lesson plan for a ${gradeLevel} grade class on the topic: "${topic}". Include learning objectives, materials needed, step-by-step activities, and an assessment method.`,
      });
      // Fix: Access the generated text directly from the .text property.
      setLessonPlan(response.text);
    } catch (error) {
      console.error('Error generating lesson plan:', error);
      setLessonPlan('Failed to generate lesson plan. Please check the console for details.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Teacher Dashboard</h2>
      <p>Create a new lesson plan using AI.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '2rem auto' }}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter lesson topic (e.g., 'The Water Cycle')"
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <select
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        >
          <option value="">Select Grade Level</option>
          <option value="1st">1st Grade</option>
          <option value="2nd">2nd Grade</option>
          <option value="3rd">3rd Grade</option>
          <option value="4th">4th Grade</option>
          <option value="5th">5th Grade</option>
          <option value="6th">6th Grade</option>
        </select>
        <button onClick={generateLessonPlan} disabled={loading} style={{ padding: '0.75rem', fontSize: '1rem', cursor: 'pointer' }}>
          {loading ? 'Generating...' : 'Generate Lesson Plan'}
        </button>
        {lessonPlan && (
          <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem', whiteSpace: 'pre-wrap', background: '#f9f9f9', textAlign: 'left', borderRadius: '8px' }}>
            <h3>Generated Lesson Plan</h3>
            <p>{lessonPlan}</p>
          </div>
        )}
      </div>
    </div>
  );
};
// --- END: components/TeacherDashboard.tsx ---

// --- START: components/StudentFlow.tsx ---
const StudentFlow = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) {
      alert('Please enter a question.');
      return;
    }
    setLoading(true);
    setAnswer('');
    try {
      // Fix: Initialize GoogleGenAI with the required apiKey object.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Fix: Use ai.models.generateContent for text generation.
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `As a helpful study assistant for a student, answer the following question clearly and concisely: "${question}"`,
        config: {
            systemInstruction: "You are a helpful study assistant for students. Explain concepts in a way that is easy to understand.",
        }
      });
      // Fix: Access the generated text directly from the .text property.
      setAnswer(response.text);
    } catch (error)      {
      console.error('Error getting answer:', error);
      setAnswer('Sorry, I could not get an answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Student Study Helper</h2>
      <p>Have a question about your lesson? Ask here!</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '2rem auto' }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g., 'Why is the sky blue?'"
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button onClick={askQuestion} disabled={loading} style={{ padding: '0.75rem', fontSize: '1rem', cursor: 'pointer' }}>
          {loading ? 'Thinking...' : 'Ask Question'}
        </button>
        {answer && (
          <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem', whiteSpace: 'pre-wrap', background: '#f9f9f9', textAlign: 'left', borderRadius: '8px' }}>
            <h3>Answer</h3>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};
// --- END: components/StudentFlow.tsx ---

// --- START: App.tsx ---
const App = () => {
  const [userType, setUserType] = useState<'teacher' | 'student' | null>(null);

  if (!userType) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Welcome to Lesson Planner AI</h2>
        <p>Are you a teacher or a student?</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button onClick={() => setUserType('teacher')} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>I'm a Teacher</button>
          <button onClick={() => setUserType('student')} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>I'm a Student</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', textAlign: 'center' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {userType === 'teacher' ? <TeacherDashboard /> : <StudentFlow />}
      </main>
      <Footer />
    </div>
  );
};
// --- END: App.tsx ---

// --- START: index.tsx (original entrypoint logic) ---
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}
// --- END: index.tsx ---
