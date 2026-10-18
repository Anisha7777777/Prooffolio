import { Link, Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';

function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <Link to="/" className="text-sm font-semibold text-emerald-800">← Back to Prooffolio</Link>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Coming in a later phase</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      </div>
    </main>
  );
}

function NotFoundPage() {
  return (
    <PlaceholderPage title="Page not found" description="That page is not part of Prooffolio yet. Try heading back home." />
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<PlaceholderPage title="Welcome back" description="The sign-in experience will be added in a later phase." />} />
      <Route path="/signup" element={<PlaceholderPage title="Create your account" description="Account creation will be added in a later phase." />} />
      <Route path="/dashboard" element={<PlaceholderPage title="Your dashboard" description="Your portfolio workspace will be built in a later phase." />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
