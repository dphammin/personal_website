import type { Resume } from "./types";

/**
 * Single source of truth for everything the site displays.
 *
 * Transcribed from Duc_Pham_resume.pdf. When the PDF changes, update this
 * file and drop the new PDF at public/Duc_Pham_resume.pdf — no component
 * should ever need editing to reflect a resume change.
 *
 * Ordering is array order: newest first.
 */
export const resume: Resume = {
  profile: {
    name: "Duc Pham",
    headline:
      "Computer Engineering M.S. + B.S. @ Purdue — computer architecture, RTL design, and pre-silicon verification",
    contact: {
      email: "dphammin@purdue.edu",
      phone: "(+1) 765-543-6009",
      linkedin: "https://www.linkedin.com/in/duc-pham",
      linkedinLabel: "linkedin.com/in/duc-pham",
    },
  },

  education: [
    {
      school: "Purdue University",
      location: "West Lafayette, IN",
      degree: "M.S. + B.S. in Computer Engineering",
      gpa: "3.6/4.0",
      graduation: "Expected May 2027",
      coursework: [
        "Advanced Computer Architecture",
        "System-on-Chip Design",
        "Hardware & Software Security",
        "ASIC Design",
        "Operating Systems",
        "Artificial Intelligence",
        "Embedded Systems",
        "Digital Systems Design",
        "Data Structures & Algorithms",
      ],
    },
  ],

  experience: [
    {
      company: "Tesla, Inc.",
      title: "AI Hardware Intern",
      focus: "Next-gen AI6 Inference SoC",
      location: "Palo Alto, CA",
      period: "Jan 2026 – Jun 2026",
      bullets: [
        "Formally verified an AI6 MSHR-backed L1 cache coherence system in JasperGold using SVA, proving MESI liveness, snoop-filter consistency, and multi-core atomic ordering invariants across the full L1 property set pre-silicon.",
        "Verified an out-of-order systolic MAC array via a sequential equivalence checking (SEC) RTL-to-C strategy; mapped pipeline scoreboards and drove COI/proof-core coverage closure to trap microarchitectural hazards and denormal/NaN cases.",
        "Architected formal abstractions to overcome state-space explosion on a 100K-FLOP compute unit, leveraging k-induction, cut-points, black-boxing, and symbolic variables for full proof convergence.",
        "Extended an async Pytest validation framework for AP DUTs with dependency-injected fixtures and FIO/stress-ng workloads; added plugins for target discovery, Splunk telemetry, and CI board provisioning.",
      ],
    },
    {
      company: "EPFL Processor Architecture Lab",
      title: "Research Intern",
      focus: "High-performance task parallelism, FPGA & HBM system characterization",
      location: "Lausanne, Switzerland",
      period: "May 2025 – Sep 2025",
      bullets: [
        "Built a Chisel-based task-level-parallel (TLP) architecture on AMD Alveo U280, achieving 128x speedup across 128 PEs at 12% LUT overhead; removed memory bottlenecks for 8% gain using a custom cycle-accurate simulator.",
        "Designed an HBM traffic generator via a pipelined AXI5 DMA controller in Chisel with DecoupledIO interfaces and store-and-forward buffering, sustaining a throughput of 12.8 Gb/s at 200 MHz.",
        "Closed 85% functional coverage on the TLP fabric and AXI5 DMA datapath via a cocotb regression suite with constrained-random traffic and a golden reference model, targeting arbitration, burst-boundary, and back-pressure cases.",
      ],
    },
    {
      company: "SoCET AI Hardware",
      title: "Architecture Developer",
      focus: "Tensor core scratchpad for GEMM/Conv acceleration",
      location: "West Lafayette, IN",
      period: "Jan 2024 – Present",
      bullets: [
        "Integrated a shared memory subsystem with a vector core and systolic array at 900 MHz via a 9-stage pipelined Benes-network permutation crossbar, featuring 8-way SRAM banking, swizzling, and load/store coalescing.",
        "Built a UVM testbench using constrained-random traffic and scoreboard checking, driving functional coverage closure on bank-conflict and permutation cases; achieved 1.2x GEMM speedup, 10% higher DRAM utilization, and 15% lower L2 traffic.",
      ],
    },
  ],

  projects: [
    {
      name: "NAND SSD FTL with ML-Guided Policy Search (Agentic FTL)",
      context: "NextSys Lab",
      period: "May 2026 – Present",
      bullets: [
        "Designed the garbage-collection and data-placement policies in a discrete-event NAND SSD performance model, cutting write amplification 31% and P99 tail latency 59% versus a greedy baseline under skewed writes.",
        "Drove design-space exploration and workload characterization in C++ across steady-state, equal-write-volume sweeps over over-provisioning, skew, and wear leveling, plus performance-model validation.",
        "Led architectural trade-off analysis showing greedy victim selection was already near-optimal, redirecting the roadmap to hot/cold data placement and ML-guided policy search tuned for WAF, endurance, and QoS latency.",
      ],
    },
    {
      name: "Dual-Core Pipelined RISC-V Processor with Coherent L1 Cache",
      period: "Aug 2025 – Dec 2025",
      bullets: [
        "Developed a dual-core, 5-stage pipelined RISC-V processor with coherent L1 caches and a custom control unit supporting parallel execution; implemented multithreading and synchronization with RISC-V assembly validation.",
        "Closed timing at 82 MHz on an AMD Spartan-7 FPGA (Urbana board) with a pipelined bus, delivering 2x higher throughput over the single-core baseline while demonstrating cache-coherence protocol correctness across cores.",
      ],
    },
  ],

  skills: [
    {
      label: "Languages & Tools",
      items: [
        "SystemVerilog/Verilog", "C/C++", "gem5", "Python", "Chisel/Scala",
        "Perl", "TCL", "Bash", "RISC-V Assembly", "PrimeTime", "Vivado",
        "Quartus", "Verdi", "QuestaSim", "VCS", "Verilator", "VC Formal",
        "JasperGold", "Jenkins", "cocotb", "Virtuoso", "Palladium", "MATLAB",
        "Git", "Linux",
      ],
    },
    {
      label: "Design & Architecture",
      items: [
        "Microarchitecture (5-stage pipelines, out-of-order execution, branch prediction, crossbars)",
        "Cache coherence (MESI, snoop filters, MSHR)",
        "Memory subsystem (multi-bank SRAM, HBM, DDR, prefetching)",
        "Memory consistency", "NoC", "AMBA AXI4/AXI5", "RISC-V ISA", "CDC",
        "Synthesis (Design Compiler, Genus)", "DPI-C",
        "Static timing analysis", "Timing closure", "FPGA prototyping",
      ],
    },
    {
      label: "Methodologies",
      items: [
        "Dynamic verification (UVM, constrained-random, scoreboard checking, functional coverage closure)",
        "Formal verification (SVA authoring, k-induction, COI/proof-core coverage)",
        "Pre-silicon validation (regression, waveform debug, CI/CD)",
      ],
    },
  ],

  resumePdf: "/Duc_Pham_resume.pdf",
};
