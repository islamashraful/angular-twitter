/**
 * Core Helpers 
 */
export class CoreHelpers {
    static matchHashtag(hashtags: string[], match: string): string[] {
        const matchFound = hashtags.some(item => item.toLocaleLowerCase() === match.toLocaleLowerCase());

        return matchFound ? hashtags : [];
    }

    static longDate(date: string): string {
        return date.split(' ').splice(3).join(' ');
    }
}