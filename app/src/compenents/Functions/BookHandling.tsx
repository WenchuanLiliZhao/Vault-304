// ========================
// 创建书籍
// ========================

import { Page, Role, Subpages } from "../../pages/_types/PageShapes";
import { SortPostMode, SortPosts } from "../FeedsAndElements/Feeds/CardFeeds";

// 定义 CorrectedBook 类型
// 更新后反映新的结构，并校正拼写错误
type CorrectedBook = {
  cover: Page; // 对应 `Page` 类型的 cover（封面是一个页面）
  subpages: Subpages; // 将之前的 `pages` 替换为 `subpages`
  sortTocBy: SortPostMode;
};

// 定义基础参数类型
type BookParams<T extends Subpages> = CorrectedBook & {
  subpages: T;
};

// 返回的书籍类型
type BookA<T extends Subpages> = CorrectedBook & {
  subpages: T;
};

// 重新实现 `CreateBook` 函数
// Corrected and updated CreateBook function
export function CreateBook<T extends Subpages>({
  cover,
  subpages,
  sortTocBy,
}: BookParams<T>): BookA<T> {
  const allAuthors: { data: Page; roles: Role[] }[] = []; // Collect all authors here
  const allTags: string[] = []

  Object.values(subpages).forEach((subpage) => {
    // Reorganize paths for subpages
    // subpage.info.key = `${cover.info.key}/${subpage.info.key}`;

    if (subpage.postInfo && cover.postInfo) {
      // Add subpage's authors to the collection
      allAuthors.push(...subpage.postInfo.authors);
      allTags.push(...subpage.postInfo.tags)

      // Load TOC (table of contents)
      subpage.postInfo.toc = SortPosts({
        posts: subpages,
        sortby: sortTocBy,
      });

      cover.postInfo.toc = SortPosts({
        posts: subpages,
        sortby: sortTocBy,
      });

      // Assign parent to the subpage
      subpage.postInfo.parent = cover;
    }
  });

  // Deduplicate authors based on `data` (as it refers to a `Page`)
  const uniqueAuthors = Array.from(
    new Map(allAuthors.map((author) => [author.data.info.path, author])).values()
  );

  const uniqueTags = Array.from(
    new Map(allTags.map((tag) => [tag, tag])).values()
  )

  // Assign deduplicated authors to the cover's `postInfo`
  if (cover.postInfo) {
    cover.postInfo = {
      ...(cover.postInfo || {}),
      authors: uniqueAuthors,
      tags: uniqueTags,
    };
  }

  return { cover, subpages, sortTocBy };
}


// ========================
// 合并书籍页面
// ========================

// 这个函数是为了防止在文章中交叉索引的时候，出现目录丢失
export function MergeSubpages<T extends Record<string, { subpages: Subpages }>>(
  collections: T
): {
  [K in keyof T]: T[K]["subpages"];
}[keyof T] {
  return Object.values(collections).reduce(
    (acc, item) => ({
      ...acc,
      ...item.subpages,
    }),
    {} as Subpages
  );
}
