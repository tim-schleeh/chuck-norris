"use client";
import { useState, useEffect } from "react";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // get visitor count from the server
  const fetchVisitorCount = async () => {
    try {
      const res = await fetch("/api/visitor");

      if (!res.ok) throw new Error("Error on fetching visitor count");

      const data = await res.json();
      setVisitorCount(data.count);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  // fetch initial visitor count
  useEffect(() => {
    fetchVisitorCount();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">⚠️ {error}</p>
      ) : visitorCount !== null ? (
        <p>Visitors: {visitorCount}</p>
      ) : (
        <p className="text-gray-400 animate-pulse">Loading...</p>
      )}
    </div>
  );
}
