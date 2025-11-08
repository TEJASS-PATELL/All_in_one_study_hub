import { useAuthStore } from "../Store/useAuthStore";
import Discussion from "../Pages/Discussion";

const DiscussionWrapper = () => {
  const { authUser } = useAuthStore();

  if (!authUser) return <p>Loading user info...</p>;

  return <Discussion userId={authUser.id} />;
};

export default DiscussionWrapper;
