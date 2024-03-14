export function calloutsToAdmonition(inputStr: string): string {
    // Define a regular expression to extract variables.
    const pattern: RegExp = /> \[\!([^\]]+)\] ([^\n]+)\n([\s\S]*)/g;

    const matches: RegExpMatchArray | null = [...inputStr.matchAll(pattern)];
    
    let output: string = "";
    for (const match of matches) {
        const [, keyword, annotation, content] = match;
        // Remove the "> " at the beginning of the content.
        const strippedContent: string = content.replace(/^> /gm, "");
        const outputStr: string = `{{< admonition ${keyword.trim().toLowerCase()} ${annotation.trim()} true >}}\n${strippedContent.trim()}\n{{< /admonition >}}`;
        output += outputStr + "\n";
    }
    return output || "The input format is incorrect.";
}