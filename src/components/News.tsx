import React, { useEffect, useState } from "react";
import Papa from "papaparse";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  image_url: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSHTEFK0take51xJ3nII_Uav-Aj3o_1CREdJiEzyBAUkp9WUxKuotRrcd_Rr-v8PXMVLfb60QCsN4Yh/pub?output=csv";

    fetch(csvUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Şəbəkə xətası");
        return res.text();
      })
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const sortedData = (parsed.data as NewsItem[])
          .filter((item) => item.date)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

        setNews(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Xəbərləri yükləmək mümkün olmadı");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center text-green-700 font-semibold text-lg mt-10">
        Yüklənir...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-600 font-semibold text-lg mt-10">
        {error}
      </p>
    );

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-14 bg-gradient-to-b from-green-50 to-green-100 rounded-3xl shadow-2xl">
      <h1 className="text-5xl font-extrabold text-center text-green-900 mb-16 tracking-wide drop-shadow-md">
        Son Xəbərlər
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {news.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-green-400/50 cursor-pointer border border-green-200"
              onClick={() => toggleExpand(index)}
              aria-expanded={isExpanded}
            >
              <div className="relative group">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-t-3xl group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://via.placeholder.com/600x256?text=Şəkil+yoxdur";
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-green-900/70 text-white text-sm px-6 py-2 rounded-b-3xl backdrop-blur-sm font-semibold tracking-wide">
                  🗓{" "}
                  {new Date(item.date).toLocaleDateString("az-AZ", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-900 mb-4 line-clamp-2">
                  {item.title}
                </h2>
                <p
                  className={`text-green-800 text-base leading-relaxed transition-all duration-500 ${
                    isExpanded ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {item.description}
                </p>
                <button
                  className="mt-4 text-green-700 font-semibold hover:text-green-900 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(index);
                  }}
                >
                  {isExpanded ? "Daha az göstər" : "Ətraflı oxu"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News
