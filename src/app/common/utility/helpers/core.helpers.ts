/**
 * Core Helpers 
 */
export class CoreHelpers {
    static matchHashtag(hashtags: string[], match: string): string {
        const matchFound = hashtags.some(item => item.toLocaleLowerCase() === `#${match.toLocaleLowerCase()}`);

        return matchFound ? hashtags.join(', ') : null;
    }

    static longDate(date: string): string {
        const items = date.split(' ').splice(3);
        if (items.length === 3) {
            return `${items[1]} ${items[0]}, ${items[2]}`
        } else {
            return null;
        }
    }
}