import React, { useState, useEffect } from "react";

const SuggestionGiver = () => {
  const [mood, setMood] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const fetchSuggestions = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await fetch(
        `http://192.168.123.78:5000/generate_description?text=${mood}`
      );
      console.log(response);
      const result = await response.json();
      console.log(result);
      setSuggestions(result);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  useEffect(() => {
    if (mood !== "") {
      fetchSuggestions();
    }
  }, [mood]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <div className="mb-8">
          <label htmlFor="mood" className="text-xl block font-bold mb-2">
            Choose your mood:
          </label>
          <select
            id="mood"
            className="p-2 border border-gray-300 rounded w-full"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select Mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="anxious">Anxious</option>
            <option value="depressed">Depressed</option>
            <option value="stressed">Stressed</option>
            <option value="confused">Confused</option>
            <option value="frustrated">Frustrated</option>
            <option value="relaxed">Relaxed</option>
            <option value="tired">Tired</option>
            <option value="bored">Bored</option>
            <option value="calm">Calm</option>
            <option value="hopeful">Hopeful</option>
            <option value="motivated">Motivated</option>
            <option value="optimistic">Optimistic</option>
            <option value="proud">Proud</option>
            <option value="satisfied">Satisfied</option>
            <option value="thankful">Thankful</option>
            <option value="loved">Loved</option>
            <option value="lonely">Lonely</option>
            <option value="jealous">Jealous</option>
            <option value="guilty">Guilty</option>
            <option value="embarrassed">Embarrassed</option>
            <option value="ashamed">Ashamed</option>
            <option value="disgusted">Disgusted</option>
            <option value="scared">Scared</option>
            <option value="excited">Excited</option>
            {/* Add more mood options as needed */}
          </select>
        </div>

        <div>
          {suggestions.length > 0 && (
            <div className="border border-gray-300 rounded p-4">
              <h2 className="text-xl font-bold mb-4">Suggestions:</h2>
              <p className="text-black">{suggestions.result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionGiver;
