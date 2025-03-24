const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Flowchart,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Flowchart.Acts.StartFlowchart,
		C3.Plugins.Flowchart.Cnds.OnAnyNodeChange,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Flowchart.Exps.OutputValue,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Flowchart.Acts.GotoNextFlowchartNode
	];
};
self.C3_JsPropNameTable = [
	{StartText: 0},
	{PathA: 0},
	{PathB: 0},
	{BGImage: 0},
	{Mouse: 0},
	{FlowchartController: 0}
];

self.InstanceType = {
	StartText: class extends self.ITextInstance {},
	PathA: class extends self.ITextInstance {},
	PathB: class extends self.ITextInstance {},
	BGImage: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	FlowchartController: class extends self.IInstance {}
}