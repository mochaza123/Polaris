import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "Recode",
      linkText: "Recode by @mochaza",
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fthank-you-card&psig=AOvVaw1NFygdkIrAxKhWV5KIZO80&ust=1703336676835000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCunt-No4MDFQAAAAAdAAAAABAD",
    },
    {
      title: "Developer",
      linkText: "@cybervector_",
      link: "https://twitter.com/cybervector_",
    },
    {
      title: "Alpha",
      linkText: "@ChaunceyCrypto",
      link: "https://twitter.com/ChaunceyCrypto",
    },
  ];

  return (
    <div className=" flex items-center justify-center gap-x-4 py-4 max-sm:flex-col">
      {mediaList.map(({ title, linkText, link }) => {
        return (
          <div
            key={title}
            className=" flex items-center gap-2 text-xl"
          >
            <span>{title}:</span>
            <Box
              component={Link}
              href={link}
              className=" hover:underline"
              sx={{
                color: "primary.main",
              }}
            >
              {linkText}
            </Box>
          </div>
        );
      })}
    </div>
  );
}
