import { useGlobalState } from "@/globalState";
import { usePostPageState } from "../post/state";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function Content() {
  const user = useGlobalState((state) => state.user);
  const logout = useGlobalState((state) => state.logout);
  const navigate = useNavigate();
  const favoritedPosts = usePostPageState((state) => state.favoritedPosts);
  const comments = usePostPageState((state) => state.comments);
  const userComments = comments.filter(
    (comment) => comment.authorId === user?._id,
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-2xl p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="text-muted-foreground">
              Your account information and stats
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Name
              </label>
              <p className="text-lg">{user.name}</p>
            </div>

            <div>
              <label className="text-muted-foreground text-sm font-medium">
                Email
              </label>
              <p className="text-lg">{user.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-muted-foreground text-sm font-medium">
                  Favorited Posts
                </p>
                <p className="text-2xl font-bold">{favoritedPosts.size}</p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-muted-foreground text-sm font-medium">
                  Comments Made
                </p>
                <p className="text-2xl font-bold">{userComments.length}</p>
              </div>
            </div>

            <Button
              variant="destructive"
              className="mt-6 w-full"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
