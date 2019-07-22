/**
 * Core Helpers 
 */
export class CoreHelpers {
    /**
     * Get first two hashtags from the given hashtags array.
     * Returns first two hashtags as a comma separated value
     * @param hashtags
     */
    static filterHashtag(hashtags: string[]): string {
        return hashtags.splice(0, 2).join(', ');
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

    /**
     * Replace zero with a dash
     * @param number 
     */
    static replaceZeroWithDash(number: number) {
        return number > 0 ? number : '-';
    }

    /**
     * Remove special symbols and spaces from hashtag
     * @param hashtag 
     */
    static formatHashtag(hashtag: string): string {
        return hashtag.replace(/[^A-Z0-9]+/ig, "");
    }
}