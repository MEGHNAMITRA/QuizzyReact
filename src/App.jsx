import { useState } from "react";
import"./app.css";
import Trivia from "./components/Trivia";
import { useEffect } from "react";
import { useMemo } from "react";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState( "$ 0");
  const data = [
    {
      id: 1,
      question: "Which Set class should be most popular in a multi-threading environment, considering performance constraint?",
      answers: [
        {
          text: "HashSet",
          correct: false,
        },
        {
          text: "LinkedHasSet",
          correct: false,
        },
        {
          text: "ConcurrentSkipListSet",
          correct: true,
        },
        {
          text: "CopyOnWriteArraySet",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What guarantees type-safety in a collection?",
      answers: [
        {
          text: "Generics",
          correct: true,
        },
        {
          text: "Abstract classes",
          correct: false,
        },
        {
          text: "Interfaces",
          correct: false,
        },
        {
          text: "Collection",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "HashSet internally uses?",
      answers: [
        {
          text: "Collection",
          correct: false,
        },
        {
          text: "List",
          correct: false,
        },
        {
          text: "Hashmap",
          correct: false,
        },
        {
          text: "Set",
          correct: true,
        },    
      ],
    },
    {
      id: 4,
      question: "The most used interfaces from the collection framework are?",
      answers: [
        {
          text: "List",
          correct: false,
        },
        {
          text: "Hashmap",
          correct: false,
        },
        {
          text: "Map",
          correct: true,
        },
        {
          text: "Set",
          correct: false,
        },    
      ],
    },
    {
      id: 5,
      question: "The root interface of Java collection framework hierarchy is ",
      answers: [
        {
          text: "Collection",
          correct: false,
        },
        {
          text: "Root",
          correct: false,
        },
        {
          text: "Collections",
          correct: false,
        },
        {
          text: "List/Set",
          correct: true,
        },    
      ],
    },
    {
      id: 6,
      question: "Which of those is synchronized?",
      answers: [
        {
          text: "ArrayList",
          correct: false,
        },
        {
          text: "LinkedList",
          correct: false,
        },
        {
          text: "Vector",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },    
      ],
    },
    {
      id: 7,
      question: "ArrayList implements that of the following?",
      answers: [
        {
          text: "List",
          correct: false,
        },
        {
          text: "RandomAccess",
          correct: false,
        },
        {
          text: "Cloneable",
          correct: false,
        },
        {
          text: "All of these",
          correct: true,
        },    
      ],
    },
    {
      id: 8,
      question: "Which of those permits the storage of the many null values?",
      answers: [
        {
          text: "Set",
          correct: false,
        },
        {
          text: "List",
          correct: false,
        },
        {
          text: "None of these",
          correct: false,
        },
        {
          text: "All of these",
          correct: true,
        },    
      ],
    },
    {
      id: 9,
      question: "Vector extends that of these?",
      answers: [
        {
          text: "ArrayList",
          correct: false,
        },
        {
          text: "LinkedList",
          correct: false,
        },
        {
          text: "AbstractList",
          correct: true,
        },
        {
          text: "None",
          correct: false,
        },    
      ],
    },
    {
      id: 10,
      question: "LinkedList implements",
      answers: [
        {
          text: "Deque",
          correct: false,
        },
        {
          text: "List",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
        {
          text: "Both of above",
          correct: true,
        },    
      ],
    },
    {
      id: 11,
      question: "In Iterator, nextElement() method of Enumeration has been changed to",
      answers: [
        {
          text: "next()",
          correct: false,
        },
        {
          text: "genNext()",
          correct: false,
        },
        {
          text: "returnNext()",
          correct: false,
        },
        {
          text: "name remains same",
          correct: true,
        },    
      ],
    },
    {
      id: 12,
      question: "What describes an algorithm performs in best, average or worse case scenarios?",
      answers: [
        {
          text: "Big-B",
          correct: false,
        },
        {
          text: "Big-O",
          correct: true,
        },
        {
          text: "Big-Data",
          correct: false,
        },
        {
          text: "Big-N",
          correct: false,
        },    
      ],
    },
    {
      id: 13,
      question: "State the search time complexity of an ordered array.",
      answers: [
        {
          text: "O(n)",
          correct: true,
        },
        {
          text: "O(1)",
          correct: false,
        },
        {
          text: "O(log n)",
          correct: false,
        },
        {
          text: "O(n-1)",
          correct: false,
        },    
      ],
    },
    {
      id: 14,
      question: "TreeMap implements",
      answers: [
        {
          text: "Dictionary",
          correct: false,
        },
        {
          text: "Hashmap",
          correct: false,
        },
        {
          text: "AbstarctMap",
          correct: false,
        },
        {
          text: "navigable Map",
          correct: true,
        },    
      ],
    },
    {
      id: 15,
      question: "Which of these is the most popularly used class as a key in a HashMap?",
      answers: [
        {
          text: "String",
          correct: false,
        },
        {
          text: "Integer",
          correct: true,
        },
        {
          text: "Double",
          correct: false,
        },
        {
          text: "All of the above",
          correct: false,
        },    
      ],
    },
  ];
  const moneyPyramid= useMemo(() =>
  [
    {id:1,amount:"₹ 100"},
    {id:2,amount:"₹ 200"},
    {id:3,amount:"₹ 300"},
    {id:4,amount:"₹ 500"},
    {id:5,amount:"₹ 1000"},
    {id:6,amount:"₹ 2000"},
    {id:7,amount:"₹ 4000"},
    {id:8,amount:"₹ 8000"},
    {id:9,amount:"₹ 16000"},
    {id:10,amount:"₹ 32000"},
    {id:11,amount:"₹ 64000"},
    {id:12,amount:"₹ 125000"},
    {id:13,amount:"₹ 250000"},
    {id:14,amount:"₹ 500000"},
    {id:15,amount:"₹ 1000000"},
  ].reverse(),
[]);
  useEffect(() => {
    questionNumber>1 &&
    setEarned(moneyPyramid.find((m) => m.id=== questionNumber -1).amount);
  },[moneyPyramid,questionNumber]);
  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
      
      
export default App;
