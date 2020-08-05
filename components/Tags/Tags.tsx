import React from "react";
import { List } from "@shared/types";
import { TagLink } from "@components/TagLink";
import { Tags as TagsType } from "@domain/tags/types";
import styles from "./Tags.module.css";

type TagsProps = {
  tags: List<TagsType>;
};

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <menu className={styles.tags}>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <TagLink tag={tag} />
          </li>
        ))}
      </ul>
    </menu>
  );
};
