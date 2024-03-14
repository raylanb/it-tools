// github-to-jsdelivr.service.ts

export function githubToJsDelivr(githubUrl: string): [string, string] {
    const parts = githubUrl.split('/');
    const username = parts[3];
    const repository = parts[4];
    let branchIndex = -1;
    let branch;
    
    if (parts.includes('tree')) {
        branchIndex = parts.indexOf('tree');
        branch = parts[branchIndex + 1];
    } else if (parts.includes('blob')) {
        branchIndex = parts.indexOf('blob');
        branch = parts[branchIndex + 1];
    } else {
        branchIndex = 4;
        branch = parts[branchIndex + 1];
    }
  
    let filePath;
    if (branchIndex !== -1) {
        filePath = parts.slice(branchIndex + 2).join('/');
    } else {
        filePath = parts.slice(4).join('/');
    }
  
    const jsdelivrCdnUrl = `https://cdn.jsdelivr.net/gh/${username}/${repository}@${branch}/${filePath}`;
    const jsdelivrFastlyUrl = `https://fastly.jsdelivr.net/gh/${username}/${repository}@${branch}/${filePath}`;
    return [jsdelivrCdnUrl, jsdelivrFastlyUrl];
  }
  