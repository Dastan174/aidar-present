"use client";
import { useState } from "react";
import "./baloons.css";

const offers = [
  { id: 1, text: "Сенин кучагын — журогум тапкан эн тынч жай." },
  { id: 3, text: "Жылмаюун бир кунумду эмес, бут ааламымды кооздойт." },
  { id: 6, text: "Коздорундо айтылбаган мээримдин ааламы жашайт." },
  { id: 2, text: "Сен жанымда болгондо, дуйно дагы жарык корунот." },
  { id: 4, text: "Журогумдун эн сулуу ыры сенин атын менен башталат." },
];

export default function Balloons() {
  // Первый шарик уже "лопнут"
  const [popped, setPopped] = useState(1);

  return (
    <div className="sky">
      {offers.map((offer, i) => (
        <div
          key={offer.id}
          className={`balloon balloon-${i} ${
            popped === offer.id ? "popped" : ""
          }`}
          onClick={() => setPopped(offer.id)}
        >
          <div className="shape"></div>
          <div className="string"></div>

          {popped === offer.id && (
            <div className="offer-text">{offer.text}</div>
          )}
        </div>
      ))}
    </div>
  );
}
