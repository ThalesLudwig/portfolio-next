const hasAvatar = (previousMessages, isFirst) => {
  if (!!previousMessages) {
    const lastMessage = previousMessages[previousMessages.length - 1];
    return !lastMessage.isPrimary;
  } else if (isFirst) {
    return true;
  } else {
    return false;
  }
};

const parser = (data, previousMessages) => {
  const messages = [];

  if (typeof data === "string") {
    return {
      id: Math.random(),
      text: data,
      isPrimary: true,
      hasAvatar: hasAvatar(previousMessages, true),
    };
  }

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      const currentResponse = data[i];
      if (typeof currentResponse === "string") {
        messages.push({
          id: Math.random(),
          text: currentResponse,
          isPrimary: true,
          hasAvatar: hasAvatar(previousMessages, i === 0),
        });
      } else {
        if (typeof currentResponse.data === "string") {
          messages.push({
            id: Math.random(),
            text: currentResponse.data,
            isPrimary: true,
            hasAvatar: true,
          });
        } else {
          for (let j = 0; j < currentResponse.data.length; j++) {
            messages.push({
              id: Math.random(),
              text: currentResponse.data[j],
              isPrimary: true,
              hasAvatar: j === 0 && i === 0,
            });
          }
        }
      }
      if (!!currentResponse.meta && currentResponse.meta.length > 0) {
        messages.push({
          id: Math.random(),
          isPrimary: true,
          hasAvatar: false,
          media: currentResponse.meta,
        });
      }
    }
    return messages;
  }

  if (typeof data === "object" && !Array.isArray(data)) {
    return {
      id: Math.random(),
      text: data?.text,
      isPrimary: true,
      isAlt: true,
      hasAvatar: hasAvatar(previousMessages, true),
    };
  }
};

export default parser;
