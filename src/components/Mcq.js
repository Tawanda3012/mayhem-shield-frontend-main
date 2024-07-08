import React, { useState } from "react";

const Mcq = () => {
    const [mcqs, setMcqs] = useState([
        {
            question: "What is the currency of Japan?",
            options: [
                { text: "Yen", weight: 5 },
                { text: "Euro", weight: 0 },
                { text: "Dollar", weight: 0 },
                { text: "Pound", weight: 0 },
            ],
            type: "radio",
        },
        {
            question: "Which river flows through Paris?",
            options: [
                { text: "Seine", weight: 5 },
                { text: "Thames", weight: 0 },
                { text: "Rhine", weight: 0 },
                { text: "Danube", weight: 0 },
            ],
            type: "radio",
        },
        {
            question: "What are the colors in the national flag of Japan?",
            options: [
                { text: "Red and White", weight: 5 },
                { text: "Red and Yellow", weight: 0 },
                { text: "Blue and White", weight: 0 },
                { text: "Green and White", weight: 0 },
            ],
            type: "checkbox",
        },
        {
            question: "Which sports does LeBron James play?",
            options: [
                { text: "Basketball", weight: 5 },
                { text: "Tennis", weight: 0 },
                { text: "Football", weight: 0 },
                { text: "Cricket", weight: 0 },
            ],
            type: "checkbox",
        },
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedOption, setSelectedOption] = useState({});
    const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState({});
    const [totalWeight, setTotalWeight] = useState(0);
    const [showWarning, setShowWarning] = useState(false);

    const handleOptionChange = (option, index) => {
        if (mcqs[currentSlide].type === "radio") {
            setSelectedOption({ ...selectedOption, [currentSlide]: index });
            setTotalWeight((prevWeight) => prevWeight + option.weight);
        } else {
            const selected = selectedCheckboxOptions[currentSlide] || [];
            if (selected.includes(index)) {
                setSelectedCheckboxOptions({
                    ...selectedCheckboxOptions,
                    [currentSlide]: selected.filter((i) => i !== index),
                });
                setTotalWeight((prevWeight) => prevWeight - option.weight);
            } else {
                setSelectedCheckboxOptions({
                    ...selectedCheckboxOptions,
                    [currentSlide]: [...selected, index],
                });
                setTotalWeight((prevWeight) => prevWeight + option.weight);
            }
        };
    }

    const nextSlide = () => {
        if (!Object.keys(selectedOption).includes(currentSlide.toString()) && mcqs[currentSlide].type === "radio") {
            setShowWarning(true);
            return;
        }
        setShowWarning(false);
        setCurrentSlide((prevSlide) => prevSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="p-10 bg-white rounded-lg shadow-lg">
                {showWarning && (
                    <div className="bg-red-200 p-2 rounded text-red-800 text-center">Please select an option</div>
                )}
                <h3 className="text-3xl font-bold mb-5">{mcqs[currentSlide].question}</h3>
                <form>
                    {mcqs[currentSlide].options.map((option, index) => (
                        <div key={index} className="mb-2 text-3xl w-full bg-blue-50 ">
                            {mcqs[currentSlide].type === "radio" ? (
                                <label className="ml-2 cursor-pointer ">

                                    <div className="w-full">
                                        <input
                                            type="radio"
                                            name={currentSlide}
                                            checked={selectedOption[currentSlide] === index}
                                            onChange={() => handleOptionChange(option, index)}
                                        />
                                        {option.text}
                                    </div>
                                </label>
                            ) : (
                                <label className="ml-2  cursor-pointer">
                                    <div className="">
                                        <input
                                            type="checkbox"
                                            checked={(selectedCheckboxOptions[currentSlide] || []).includes(index)}
                                            onChange={() => handleOptionChange(option, index)}
                                        />
                                        {option.text}
                                    </div>
                                </label>
                            )}

                        </div>
                    ))}
                </form>
                <div className="flex justify-between mt-10">
                    {currentSlide > 0 && (
                        <button
                            className="bg-rose-500 p-2 rounded text-white"
                            onClick={prevSlide}
                        >
                            Previous
                        </button>
                    )}
                    {currentSlide < mcqs.length - 1 ? (
                        <button
                            className="bg-rose-500 p-2 rounded text-white"
                            onClick={nextSlide}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="bg-rose-500 p-2 rounded text-white"
                            onClick={() => console.log("Total weight:", totalWeight, "Selected Options:", { selectedOption, selectedCheckboxOptions })}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mcq;
