import { CoreHelpers } from './core.helpers';

describe('CoreHelpers', () => {
    it('should return first two hashtags from collection as comma separated value', () => {
        const result = CoreHelpers.filterHashtag([
            "#python",
            "#javascript",
            "#reactjs"
        ]);

        expect(result).toBe('#python, #javascript');
    });

    it('should parse date string to proper format', () => {
        const result = CoreHelpers.longDate('6:00 PM - 14 Jul 2019');

        expect(result).toBe('Jul 14, 2019');
    });

    it('should paginate items properly', () => {
        const result = CoreHelpers.paginate(3, 2, [1, 2, 3, 4, 5]);

        expect(result).toContain(5);
    });

    it('should replace zero with dash', () => {
        const result = CoreHelpers.replaceZeroWithDash(1);

        expect(result).toBe(1);
    });

    it('should remove special symbols and spaces', () => {
        const result = CoreHelpers.formatHashtag('#tweet match');

        expect(result).toBe('tweetmatch');
    });
});
