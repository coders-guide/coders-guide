# coders.guide

### Interactive roadmap for learning how to code, including progress tracker and curated resource links.

- **What is this?**

This is a repository for **coders.guide** website - an interactive roadmap for learning coding. Project is intended to provide many different roadmaps for different programming career paths in the future, currently it has only one for React web development.

- **Is it free and open source?**

Yes, the service is currently free for use. The source is open so everyone can contribute.

- **How can I contribute?**

Take a look at `src/data/template.tsx` file - this is how the roadmap data is organized. All roadmap entries follow the pattern:

```
export interface RoadmapEntry {
	id: number;
	category: number;
	type: "node" | "heading";
	title: string;
	summary?: string;
	description: string;
	repeatable?: boolean;
	difficult?: boolean;
	isSingleGoal?: boolean;

	topics?: string[];
	topicsHeader?: string;

	practices?: string[];
	practicesHeader?: string;

	customList?: string[];
	customListHeader?: string;

	links?: ResourceLink[];
	linksHeader?: string;
}
```

Feel free to open a pull request with additional content or a new roadmap.

### License

MIT License

Copyright (c) 2020 Hubert Zub

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
