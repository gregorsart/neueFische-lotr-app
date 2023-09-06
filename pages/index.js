import { StyledLink } from "@/components/Link.styled";
import { introduction } from "/lib/data";
import RandomBook from "@/components/RandomBook";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <nav>
        <StyledLink href="./volumes">Go to the Overview</StyledLink>
        <RandomBook />
      </nav>
    </div>
  );
}
