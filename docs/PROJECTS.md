# Awesome-OCF

Publicly available projects or initiatives that work with OCF can be listed here. As OCF is still new, this list is very small. If you have or know of something to add, please open a PR to add it here!

## Existing Projects

### CE2OCF Contract Express Exporter

Gunderson Dettmer released [CE2OCF](https://github.com/gunderson-dettmer/CE2OCF), a tool to map input data in a [Contract Express](https://www.thomsonreuters.ca/en/contract-express.html.html) template to an arbitrary JSON-bsaed data format. The initial release is built to export OCF.

### Transfer Agent Protocol

The Transfer Agent Protocol (or [TAP](https://github.com/transfer-agent-protocol/tap-cap-table)) allows you to "create a cap table that is both onchain and offchain. The onchain cap table is the source of truth and the offchain cap table is a duplicate of the onchain cap table." It is based on the OCF standard. Fairmint is the [first SEC-registered trasnfer agent to use the TAP](https://blog.fairmint.com/fairmint-is-the-first-sec-registered-transfer-agent-to-integrate-with-the-transfer-agent-protocol-36c097d854d7).

### Open Cap eXcel (OCX)

[OCX](https://github.com/Open-Cap-Table-Coalition/ocx) is an Excel-based cap table "render layer" for OCF developed and supported by the Open Cap Table Coalition. The Coalition plans to develop the standard in parallel with OCF and a suite of open source tools to convert OCF to OCX.

### Formal Validation for OCF

@roehst is working on a [formal specification](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/discussions/278#discussioncomment-3916016) of the OCF format, which will help verify the integrity of cap table exports and validate correctness of new OCF projects.

### PyOCF Python Bindings

Shoobx and @regebro are working on PyOCF, a Python library to read and create Open Cap Table Format files. Check it out [here](https://github.com/Shoobx/pyocf).

### OpenCap.co

[OpenCap.co](https://opencap.co/) is both an open source project a company. They're building an [open source cap table application](https://github.com/opencapco/opencap.co) that is compatible with the OCF standard.

### Cap.octolane.com

[cap.octolane.com](https://github.com/octolane-org/cap.octolane.com) is "the open-source cap table management infrastructure for all founders and investors". You can self-host their nice app template or pay octolane for a hosted service. They are [exploring OCF compatibility](https://github.com/octolane-org/cap.octolane.com/issues/14).

### ocf4java

[ocf4java](https://github.com/jacobyavis/ocf4java) is java class generation for Open Cap Table Format (OCF), though it does not yet properly handle OCF's complex composition structure.

## New Project Ideas

Here are a few project ideas if you want to contribute to the OCF ecosystem:

- Plugins for commonly used programs, such as an OCF editor in Google Drive.
- Programs that can find the differences between 2 OCF exports.
- Adding export and import functionality in your platforms.
- Converting OCF to common formats like PDF, CSV, XLSX, DOCX.
- Functionality to import events from OCF into a calendar.

Feel free to open an [Issue](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/issues/new/choose) if you want to discuss a project in any state of completion, or a [Pull Request](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/pulls) if you want to add a project to the list.
