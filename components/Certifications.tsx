import { Award } from "lucide-react"
import MotionDiv from "./Motion"
import { certifications } from "@/data/certifications"

function formatIssueDate(issueDate: string) {
  const [year, month] = issueDate.split("-")
  return `${year}.${month}`
}

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section-padding scroll-mt-24 bg-white dark:bg-gray-950"
    >
      <div className="container-max">
        <MotionDiv
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            자격증
          </h2>
        </MotionDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <MotionDiv
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-gray-800 flex items-center justify-center text-primary-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {formatIssueDate(cert.issueDate)} 취득
                  {cert.expiryDate && ` · ${formatIssueDate(cert.expiryDate)}까지 유효`}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
