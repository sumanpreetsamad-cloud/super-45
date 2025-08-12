"use client"

import { useEffect } from "react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
})

export default function CAPAInfographic() {
  useEffect(() => {
    // Load Chart.js dynamically
    const loadChartJS = async () => {
      const Chart = (await import("chart.js/auto")).default

      const wrapLabel = (label: string, maxWidth: number) => {
        if (label.length <= maxWidth) {
          return label
        }
        const words = label.split(" ")
        const lines: string[] = []
        let currentLine = ""
        for (const word of words) {
          if ((currentLine + word).length > maxWidth && currentLine.length > 0) {
            lines.push(currentLine.trim())
            currentLine = ""
          }
          currentLine += word + " "
        }
        lines.push(currentLine.trim())
        return lines
      }

      const tooltipTitleCallback = (tooltipItems: any[]) => {
        const item = tooltipItems[0]
        const label = item.chart.data.labels[item.dataIndex]
        if (Array.isArray(label)) {
          return label.join(" ")
        }
        return label
      }

      const chartTooltipOptions = {
        plugins: {
          tooltip: {
            callbacks: {
              title: tooltipTitleCallback,
            },
          },
        },
      }

      const brilliantBlues = {
        primary: "#0044C1",
        secondary: "#007BFF",
        accent: "#00A9E0",
        highlight: "#89D6FF",
        background: "#EBF4FF",
        danger: "#FF6B6B",
      }

      // Rejection Reasons Chart
      const rejectionData = {
        labels: [
          wrapLabel("Blow hole (casting & chemistry)", 20),
          wrapLabel("Slag patch (casting & chemistry)", 20),
          wrapLabel("Surface crack (casting & chemistry)", 20),
          "Bend",
          "Joint mark",
          "Short length",
        ],
        datasets: [
          {
            label: "Rejection Frequency",
            data: [45, 35, 8, 5, 4, 3],
            backgroundColor: [
              brilliantBlues.primary,
              brilliantBlues.secondary,
              brilliantBlues.accent,
              brilliantBlues.highlight,
              "#A0DFFF",
              "#BCE8FF",
            ],
            borderColor: "#ffffff",
            borderWidth: 2,
          },
        ],
      }

      const rejectionCtx = document.getElementById("rejectionReasonsChart") as HTMLCanvasElement
      if (rejectionCtx) {
        new Chart(rejectionCtx, {
          type: "bar",
          data: rejectionData,
          options: {
            ...chartTooltipOptions,
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
                title: { display: true, text: "Relative Frequency (%)" },
              },
            },
            plugins: {
              ...chartTooltipOptions.plugins,
              legend: { display: false },
            },
          },
        })
      }

      // Benefits Chart
      const benefitsData = {
        labels: ["More Effective Solutions", "Automated Insights (Time Saved)", "Improved Data Reliability"],
        datasets: [
          {
            data: [40, 35, 25],
            backgroundColor: [brilliantBlues.primary, brilliantBlues.secondary, brilliantBlues.accent],
            hoverOffset: 4,
          },
        ],
      }

      const benefitsCtx = document.getElementById("benefitsChart") as HTMLCanvasElement
      if (benefitsCtx) {
        new Chart(benefitsCtx, {
          type: "doughnut",
          data: benefitsData,
          options: {
            ...chartTooltipOptions,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              ...chartTooltipOptions.plugins,
              legend: {
                position: "bottom",
              },
            },
          },
        })
      }

      // Future Trend Chart
      const futureTrendData = {
        labels: ["Year 0", "Year 1", "Year 2", "Year 3 (Proactive)"],
        datasets: [
          {
            label: "Unplanned Delays",
            data: [100, 75, 40, 15],
            fill: true,
            borderColor: brilliantBlues.highlight,
            backgroundColor: "rgba(137, 214, 255, 0.2)",
            tension: 0.3,
          },
        ],
      }

      const futureTrendCtx = document.getElementById("futureTrendChart") as HTMLCanvasElement
      if (futureTrendCtx) {
        new Chart(futureTrendCtx, {
          type: "line",
          data: futureTrendData,
          options: {
            ...chartTooltipOptions,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: { display: true, text: "Index of Delays (Current = 100)", color: "white" },
                ticks: { color: "white" },
                grid: { color: "rgba(255, 255, 255, 0.2)" },
              },
              x: {
                ticks: { color: "white" },
                grid: { color: "rgba(255, 255, 255, 0.1)" },
              },
            },
            plugins: {
              ...chartTooltipOptions.plugins,
              legend: {
                labels: { color: "white" },
              },
            },
          },
        })
      }
    }

    loadChartJS()
  }, [])

  return (
    <div className={`${inter.className} text-gray-800 bg-gray-50 min-h-screen`}>
      <div className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0044C1] mb-2">From Reactive to Proactive</h1>
          <p className="text-lg md:text-xl text-gray-600">Transforming Our CAPA Process with Artificial Intelligence</p>
        </header>

        <main className="space-y-12">
          {/* Current State Section */}
          <section id="challenges">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#0044C1]">The Current State of CAPA</h2>
              <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
                Our current Corrective and Preventive Action process is triggered by significant operational issues.
                While necessary, it faces several challenges that limit its long-term effectiveness and create a cycle
                of repetitive problem-solving.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-[#0044C1] p-4 rounded-r-lg">
                    <p className="text-5xl font-extrabold text-[#0044C1]">
                      {">10"} <span className="text-2xl font-semibold text-gray-700">mins</span>
                    </p>
                    <p className="text-gray-600 mt-1">Unplanned delay trigger for a CAPA.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-[#0044C1] p-4 rounded-r-lg">
                    <p className="text-5xl font-extrabold text-[#0044C1]">
                      {">5"} <span className="text-2xl font-semibold text-gray-700">tons</span>
                    </p>
                    <p className="text-gray-600 mt-1">Quality rejection trigger for a CAPA.</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-xl mb-2 text-gray-700">Key Issues:</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 text-xl">●</span> Inconsistent data due to jargon and
                        shortforms.
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 text-xl">●</span> Non-feasible or ineffective long-term
                        solutions.
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 text-xl">●</span> Persistent problems even after
                        implementation.
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 text-xl">●</span> Lack of standardized causal chain
                        analysis.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-700">Primary Reasons for Rejection</h3>
                  <div className="relative w-full max-w-[600px] mx-auto h-[350px] max-h-[400px] md:h-[300px]">
                    <canvas id="rejectionReasonsChart"></canvas>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    The chart shows the main causes of quality deviations leading to CAPAs, with casting and chemistry
                    issues being the most significant contributors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="solution">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#0044C1]">
                The AI-Powered Solution: A New Workflow
              </h2>
              <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
                We propose an AI-driven system to automate analysis, identify root causes more effectively, and suggest
                relevant, feasible solutions. This transforms the CAPA process into an intelligent, data-driven
                workflow.
              </p>
              <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="text-center flex flex-col items-center p-4">
                  <div className="bg-[#EBF4FF] rounded-full w-24 h-24 flex items-center justify-center mb-4">
                    <span className="text-4xl">🗃️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">1. Consolidate</h3>
                  <p className="text-gray-600 max-w-xs">
                    All existing and new CAPAs are collected into a single, centralized digital repository.
                  </p>
                </div>

                <div className="hidden md:block text-4xl text-gray-400">→</div>
                <div className="block md:hidden text-4xl text-gray-400 transform rotate-90">→</div>

                <div className="text-center flex flex-col items-center p-4">
                  <div className="bg-[#EBF4FF] rounded-full w-24 h-24 flex items-center justify-center mb-4">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">2. Analyze</h3>
                  <p className="text-gray-600 max-w-xs">
                    The AI clusters similar problems, analyzes trends, and scores potential solutions for feasibility
                    and relevance.
                  </p>
                </div>

                <div className="hidden md:block text-4xl text-gray-400">→</div>
                <div className="block md:hidden text-4xl text-gray-400 transform rotate-90">→</div>

                <div className="text-center flex flex-col items-center p-4">
                  <div className="bg-[#EBF4FF] rounded-full w-24 h-24 flex items-center justify-center mb-4">
                    <span className="text-4xl">👨‍🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">3. Validate</h3>
                  <p className="text-gray-600 max-w-xs">
                    Data-backed suggestions are presented to human experts for final validation and implementation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#0044C1]">Key Benefits & Measurable Outcomes</h2>
              <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
                This new approach doesn't just fix problems; it builds a foundation for continuous improvement,
                providing clear, actionable insights and saving valuable time for our teams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-700">Distribution of Improvements</h3>
                  <div className="relative w-full max-w-[600px] mx-auto h-80 max-h-96">
                    <canvas id="benefitsChart"></canvas>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    The AI system's impact is distributed across providing more effective solutions, generating
                    automated insights to save time, and ensuring data becomes more reliable.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-xl mb-3 text-gray-700">Automated Reporting & Flagging:</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800">Dynamic Dashboards</h4>
                    <p className="text-gray-600">
                      Instantly view most common delays, rejection reasons, and department performance.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800">Flag Repetitive CAPAs</h4>
                    <p className="text-gray-600">
                      AI identifies when a preventive action was violated, causing a repeat issue.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800">Standardized Metrics</h4>
                    <p className="text-gray-600">
                      Shifts focus from subjective descriptions to measurable data like 'belt life' or 'pass life'.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Section */}
          <section id="future">
            <div className="bg-[#001F54] text-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold text-center mb-8">The Future: Proactive Anomaly Detection</h2>
              <p className="text-center max-w-3xl mx-auto mb-10 text-gray-300">
                The ultimate goal is to move beyond reacting to failures. By training the AI on real-time sensor data,
                we can predict and prevent issues before they lead to costly downtime.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="p-4 bg-[#033586] rounded-lg">
                    <h4 className="font-bold">Learn Normal Operations</h4>
                    <p className="text-gray-300">
                      AI learns the normal operating parameters of machinery (temperature, pressure, vibration).
                    </p>
                  </div>
                  <div className="p-4 bg-[#033586] rounded-lg">
                    <h4 className="font-bold">Identify Deviations</h4>
                    <p className="text-gray-300">
                      It flags subtle changes that precede a major failure, acting as an early warning system.
                    </p>
                  </div>
                  <div className="p-4 bg-[#033586] rounded-lg">
                    <h4 className="font-bold">Prevent Failures</h4>
                    <p className="text-gray-300">
                      Allows for maintenance to be performed *before* a motor trips or a part fails, preventing
                      unplanned delays entirely.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-center mb-4">Projected Impact on Unplanned Delays</h3>
                  <div className="relative w-full max-w-[600px] mx-auto h-[350px] max-h-[400px] md:h-[300px]">
                    <canvas id="futureTrendChart"></canvas>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2">
                    This chart illustrates the projected decrease in unplanned delays as the AI system matures from
                    reactive analysis to proactive, predictive maintenance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-500">
            This infographic illustrates a strategic shift towards a data-driven, AI-enhanced CAPA process.
          </p>
        </footer>
      </div>
    </div>
  )
}
