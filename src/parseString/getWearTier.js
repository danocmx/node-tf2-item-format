module.exports = function getWearTier(item) {
	let WearTier = item.match(/\((Factory New|Minimal Wear|Field-Tested|Well-Worn|Battle Scarred)\)/);
	WearTier = WearTier ? WearTier[0].replace(/[()]+/g, '') : null;
	return WearTier;
};
