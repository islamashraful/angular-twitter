/**
 * Core Helpers 
 */
export class CoreHelpers {
    /**
     * Exact match hashtags with the given hashtag string.
     * Returns first two hashtags from hashtag collection 
     * @param hashtags 
     * @param match 
     */
    static matchHashtag(hashtags: string[], match: string): string {
        const matchFound = hashtags.some(item => item.toLocaleLowerCase() === `#${match.toLocaleLowerCase()}`);

        return matchFound ? hashtags.splice(0, 2).join(', ') : null;
    }

    /**
     * Parse date string to `Month Day, Year` format
     * @param date 
     */
    static longDate(date: string): string {
        const items = date.split(' ').splice(3);
        if (items.length === 3) {
            return `${items[1]} ${items[0]}, ${items[2]}`
        } else {
            return null;
        }
    }

    /**
     * Prepare pagination data
     * @param currentPage 
     * @param pageSize 
     * @param items 
     */
    static paginate(currentPage: number, pageSize: number, items: any[]): any[] {
        const endPoint = currentPage * pageSize;
        const startIndex = endPoint - pageSize;

        return items.slice(startIndex, endPoint);
    }
}