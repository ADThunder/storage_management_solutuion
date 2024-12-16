import Image from "next/image";
import { Button } from "./ui/button";
import Search from "./Search";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      {/* Search */}
      <Search />
      <div className="header-wrapper">
        {/* FileUploader */}
        <FileUploader ownerId={userId} accountId={accountId} />
        <form
          // ? Form action react 19
          action={async () => {
            "use server";
            await signOutUser();
          }}
        >
          <Button className="sign-out-button" type="submit">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
