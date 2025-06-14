import { AppSidebar } from "@/components/Sidebar";
import { AppNavigationMenu } from "@/components/NavigationBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router";
import { useGlobalState } from "@/globalState";
import { useEffect } from "react";
function AboutPage() {
  const user = useGlobalState((state) => state.user);
  const Navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      Navigate("/login");
    }
  }, []);
  return (
    <div className="grid max-w-[100vw] gap-4 p-4">
      <AppSidebar>
        <div className="flex h-full w-full flex-col">
          <nav>
            <AppNavigationMenu />
          </nav>
          <main className="flex flex-col">
            <Card className="mb-8 rounded-lg p-8 shadow-md">
              <h2 className="mb-4 text-gray-600 dark:text-gray-400">
                About This Internship
              </h2>
              <p>
                {
                  "Welcome to my internship journey! This page documents my professional development and learning experience as an intern. During this internship, I am working with an innovative company to enhance my skills in frontend development and gain valuable industry experience."
                }
              </p>
              <p>Throughout this internship, I will be:</p>
              <ul>
                <li>Learning and implementing modern frontend technologies</li>
                <li>Working on real-world projects and challenges</li>
                <li>Collaborating with experienced professionals</li>
                <li>
                  Building a strong foundation in professional software
                  development
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Button
                  className="cursor-pointer rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-300"
                  onClick={() => {
                    alert("Welcome , this feature is still under development");
                  }}
                >
                  Join Us
                </Button>
              </div>
            </Card>

            <Card className="mb-8 rounded-lg p-8 shadow-md">
              <h2 className="mb-4 text-gray-600 dark:text-gray-400">
                Technology Stack & Learning Approach
              </h2>
              <p>
                {
                  "I implemented Express.js as a lightweight static file server to deliver the web pages to clients. Unlike a full backend implementation, Express serves purely as the runtime environment responsible for transferring HTML, CSS, and JavaScript files to the client's browser efficiently."
                }
              </p>
              <p>
                {
                  "To enhance my development process and accelerate my learning, I utilized ChatGPT as a coding assistant. This tool has helped me to:"
                }
              </p>
              <ul>
                <li>Debug code more efficiently</li>
                <li>Learn best practices in modern web development</li>
                <li>Explore different implementation approaches</li>
                <li>Understand complex programming concepts better</li>
              </ul>
            </Card>
          </main>
        </div>
      </AppSidebar>
    </div>
  );
}
export { AboutPage };
