// ========================
// 创建书籍
// ========================

import { Page, Subpages } from "../../pages/_types/PageShapes";

// 定义 CorrectedBook 类型
// 更新后反映新的结构，并校正拼写错误
type CorrectedBook = {
  cover: Page;                  // 对应 `Page` 类型的 cover（封面是一个页面）
  subpages: Subpages;           // 将之前的 `pages` 替换为 `subpages`
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
export function CreateBook<T extends Subpages>({
  cover,
  subpages,
}: BookParams<T>): BookA<T> {

  Object.values(subpages).forEach((subpage) => {
    // 对所有子页面重新组织路径
    // subpage.info.key = `${cover.info.key}/${subpage.info.key}`;

    if (subpage.postInfo) {
      // 加载目录
      subpage.postInfo.toc = Object.values(subpages)

      // 到底属于哪本书
      subpage.postInfo.parent = cover
    }
  });

  return { cover, subpages };
}


// ========================
// 合并书籍页面
// ========================

// 这个函数是为了防止在文章中交叉索引的时候，出现目录丢失
export function MergeSubpages<T extends Record<string, { subpages: Subpages }>>(collections: T): {
  [K in keyof T]: T[K]['subpages'];
}[keyof T] {
  return Object.values(collections).reduce((acc, item) => ({
    ...acc,
    ...item.subpages,
  }), {} as Subpages);
}