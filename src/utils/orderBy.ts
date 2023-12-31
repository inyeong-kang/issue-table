import { SortingDirection } from '@/types/githubIssue';

const orderBy = <T>(items: T[], callback: (item: T) => T[keyof T], sortDir: SortingDirection) => {
    console.log(items, callback, sortDir);
    return items;
};

export default orderBy;
